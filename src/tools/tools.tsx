

async function get_image_url(keywords: string, orientation: string, propKey: string, project_id: string, description: string, need_large_image: boolean, signal?: AbortSignal): Promise<string> {
    let url = "null";
    try {
        if (keywords.startsWith("data:") || keywords.startsWith("http")) {
            return keywords;
        }
        const response = await fetch("" + "/api/project_pz/getimage", {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('full_token') || '',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: keywords,
                asset_key: propKey,
                orientation: orientation,
                project_id: project_id,
                description: description,
                need_large_image: need_large_image
            }),
            signal
        });
        if (response.ok) {
            const datas = await response.json();
            url = datas["url"];
        } else {
            console.error("Failed to load config. Status:", response.status);
        }
    } catch (error) {
        console.error("An error occurred while loading config:", error);
    }
    return url;
}

async function upload_image_file(file: File, projectId?: string): Promise<string> {
    try {
        // Check file size (5MB limit)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            throw new Error('File size exceeds 5MB limit');
        }

        // 获取 project_id，优先使用传入参数，其次环境变量，最后使用占位符
        const project_id = projectId || process.env.NEXT_PUBLIC_PROJECT_ID || 'PROJ_47bdb6f4';

        // Create FormData for file upload
        const formData = new FormData();
        formData.append('image', file);
        formData.append('project_id', project_id);

        const response = await fetch("/api/project/image/upload/project", {
            method: 'POST',
            headers: {
                'AGC-language': 'en-US',
                'Accept': 'application/json, text/plain, */*',
                'X-Browser': 'Blink',
                'X-Language': 'en'
            },
            body: formData
        });

       if (response.ok) {
            const data = await response.json();
            // 检查响应格式
            if (data.code === 200 && data.data?.image_url) {
                return data.data.image_url;
            }
             // 兼容其他可能的格式
            return data.image_url || '';

        } else {
            console.error("Failed to upload image. Status:", response.status);
            throw new Error(`Upload failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error("An error occurred while uploading image:", error);
        throw error;
    }
}

/**
 * 上传文件到平台 S3 存储。
 * 支持 PDF、DOCX、XLSX、PPTX、TXT、CSV、PNG、JPG、GIF、SVG、WEBP。
 * 文件大小限制 50MB。
 *
 * @param file - 要上传的 File 对象
 * @returns 包含 file_url、file_name、file_type、file_size 的对象
 */
async function upload_project_file(file: File): Promise<{
    file_url: string;
    file_name: string;
    file_type: string;
    file_size: number;
    s3_key: string;
}> {
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
        throw new Error('文件大小不能超过 50MB');
    }

    const project_id = process.env.NEXT_PUBLIC_PROJECT_ID || 'PROJ_47bdb6f4';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('project_id', project_id);

    const response = await fetch("/api/project/file/upload/project", {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`文件上传失败: HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.code === 200 && data.data?.file_url) {
        return {
            file_url: data.data.file_url,
            file_name: data.data.file_name || file.name,
            file_type: data.data.file_type || file.type,
            file_size: data.data.file_size || file.size,
            s3_key: data.data.s3_key || '',
        };
    }
    throw new Error(data.msg || '文件上传失败');
}

/**
 * 获取已上传文件的下载 URL。
 *
 * @param s3Key - 上传时返回的 s3_key
 * @param filename - 原始文件名（可选）
 * @returns 文件下载 URL，如果文件不存在则返回 null
 */
async function get_project_file_url(s3Key: string, filename?: string): Promise<string | null> {
    const params = new URLSearchParams({ s3_key: s3Key });
    if (filename) {
        params.append('filename', filename);
    }

    const response = await fetch(
        `/api/project/file/download?${params.toString()}`,
        {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
        }
    );

    if (!response.ok) {
        throw new Error(`获取下载链接失败: HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.code === 200 && data.data?.exists && data.data?.file_url) {
        return data.data.file_url;
    }
    return null;
}

export { upload_image_file, upload_project_file, get_project_file_url }

export default get_image_url
