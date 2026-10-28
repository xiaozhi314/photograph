// 前台 Session Store
// 使用方法: import { useUserSession } from '@/tools/FrontendSession';
import { createPersistStore } from './storeFactory';

export type FrontendUserRole = 'CLIENT';
//frontenduse, Client user authentication session
export class UserSession{ 
    token: string;
    user_id: string;
    username: string;
    email: string;
    full_name: string;
    role: FrontendUserRole;
    constructor() { 
        this.token='';
        this.user_id='';
        this.username='';
        this.email='';
        this.full_name='';
        this.role='CLIENT';
    }
}

export const useUserSession = createPersistStore<UserSession>('UserSession', { token: '', user_id: '', username: '', email: '', full_name: '', role: 'CLIENT' });
