import type { ImgHTMLAttributes } from "react";

interface EditableImgProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
}

function EditableImg({ src, ...imgProps }: EditableImgProps) {
  return <img {...imgProps} src={src} />;
}

export default EditableImg;
export { EditableImg };
export type { EditableImgProps };
