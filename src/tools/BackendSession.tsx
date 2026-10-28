// 后台 Session Store
// 使用方法: import { useAdminSession } from '@/tools/BackendSession';
import { createPersistStore } from './storeFactory';

export type BackendUserRole = 'CURATOR_ADMIN';
//backenduse, Curator administrator authentication session
export class AdminSession{ 
    token: string;
    user_id: string;
    username: string;
    email: string;
    full_name: string;
    role: BackendUserRole;
    constructor() { 
        this.token='';
        this.user_id='';
        this.username='';
        this.email='';
        this.full_name='';
        this.role='CURATOR_ADMIN';
    }
}

export const useAdminSession = createPersistStore<AdminSession>('AdminSession', { token: '', user_id: '', username: '', email: '', full_name: '', role: 'CURATOR_ADMIN' });
