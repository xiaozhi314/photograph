'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import { ReactNode } from 'react';
interface GoogleMapProviderProps {
  children: ReactNode;
  apiKey?: string;
}

/**
 * 谷歌地图 Provider
 * 包裹需要使用地图的组件
 */
export function GoogleMapProvider({
  children,
  apiKey
}: GoogleMapProviderProps) {
  const key = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  if (!key) {
    console.warn('⚠️ Google Maps API Key 未配置');
    return <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg" data-api-unique-id='googlemapprovider-r2a67adc9dbcdc65e-s2613300063' data-api-unique-page-name='src/components/GoogleMap/GoogleMapProvider'>
        <p className="text-yellow-800" data-api-unique-id='googlemapprovider-r41c73274349f5d81-s2613300063' data-api-unique-page-name='src/components/GoogleMap/GoogleMapProvider'>
          ⚠️ Google Maps API Key 未配置，请在 .env.local 中添加 NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        </p>
      </div>;
  }
  return <APIProvider apiKey={key} data-api-unique-id='googlemapprovider-r3ba19a525beb512a-s2613300063' data-api-unique-page-name='src/components/GoogleMap/GoogleMapProvider'>{children}</APIProvider>;
}