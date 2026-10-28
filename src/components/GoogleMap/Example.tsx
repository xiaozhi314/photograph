'use client';

import { useState } from 'react';
import { GoogleMapProvider, Map, Marker, InfoWindow, MapPosition } from './index';

/**
 * 谷歌地图使用示例
 */
export function GoogleMapExample() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [markerPosition, setMarkerPosition] = useState<MapPosition>({
    lat: 39.9042,
    lng: 116.4074
  });

  // 示例标记点
  const markers = [{
    id: 1,
    position: {
      lat: 39.9042,
      lng: 116.4074
    },
    title: '天安门',
    description: '中国北京市中心'
  }, {
    id: 2,
    position: {
      lat: 39.9163,
      lng: 116.3972
    },
    title: '故宫',
    description: '明清两代的皇宫'
  }, {
    id: 3,
    position: {
      lat: 39.8839,
      lng: 116.4033
    },
    title: '天坛',
    description: '明清帝王祭祀场所'
  }];
  return <div className="space-y-6" data-api-unique-id='example-re66bad33999f6594-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
      <h2 className="text-2xl font-bold" data-api-unique-id='example-re72c66a22f775699-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>谷歌地图组件示例</h2>

      {/* 示例 1: 基础地图 */}
      <div className="space-y-2" data-api-unique-id='example-recfdd6ca27c9212a-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
        <h3 className="text-xl font-semibold" data-api-unique-id='example-r29160d0642143204-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>1. 基础地图</h3>
        <GoogleMapProvider data-api-unique-id='example-ra7862667dbec644f-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
          <Map center={{
          lat: 39.9042,
          lng: 116.4074
        }} zoom={12} className="rounded-lg overflow-hidden border" style={{
          height: '400px'
        }} data-api-unique-id='example-rb5cb40c64badec85-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example' />
        </GoogleMapProvider>
      </div>

      {/* 示例 2: 带标记的地图 */}
      <div className="space-y-2" data-api-unique-id='example-r69c5b60321cc5231-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
        <h3 className="text-xl font-semibold" data-api-unique-id='example-r5ad7df67ab690a09-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>2. 带标记的地图</h3>
        <GoogleMapProvider data-api-unique-id='example-r9a3c702be33249e9-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
          <Map center={{
          lat: 39.9042,
          lng: 116.4074
        }} zoom={13} className="rounded-lg overflow-hidden border" style={{
          height: '400px'
        }} data-api-unique-id='example-ra1d3915f9a108980-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
            {markers.map((marker, index) => <Marker key={marker.id} position={marker.position} title={marker.title} onClick={() => setSelectedMarker(marker.id)} pinBackground="#EA4335" data-api-unique-id='example-r9b87f07b78e15a60-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example' data-api-in-loop='1' />)}

            {/* 信息窗口 */}
            {selectedMarker && <InfoWindow position={markers.find(m => m.id === selectedMarker)!.position} onClose={() => setSelectedMarker(null)} data-api-unique-id='example-r32cef5e36f094f61-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
                <div className="min-w-[200px]" data-api-unique-id='example-rc9cba23a0558f64e-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
                  <h4 className="font-semibold text-lg mb-1" data-api-unique-id='example-rbd2c050015346e08-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
                    {markers.find(m => m.id === selectedMarker)!.title}
                  </h4>
                  <p className="text-sm text-gray-600" data-api-unique-id='example-r13b20c5262b119f0-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
                    {markers.find(m => m.id === selectedMarker)!.description}
                  </p>
                </div>
              </InfoWindow>}
          </Map>
        </GoogleMapProvider>
      </div>

      {/* 示例 3: 可拖拽标记 */}
      <div className="space-y-2" data-api-unique-id='example-r1a0842d27ccab1eb-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
        <h3 className="text-xl font-semibold" data-api-unique-id='example-r602157d01312a8c5-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>3. 可拖拽标记</h3>
        <p className="text-sm text-gray-600" data-api-unique-id='example-r4c14cbb0fb684560-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
          拖动标记到新位置，坐标会实时更新
        </p>
        <div className="mb-2 p-3 bg-gray-50 rounded border" data-api-unique-id='example-r19bd1a7afa9a1c91-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
          <p className="text-sm" data-api-unique-id='example-r4c0912d3150db02c-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
            当前位置: {markerPosition.lat.toFixed(6)}, {markerPosition.lng.toFixed(6)}
          </p>
        </div>
        <GoogleMapProvider data-api-unique-id='example-rfa074a314f517a1c-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
          <Map center={markerPosition} zoom={15} className="rounded-lg overflow-hidden border" style={{
          height: '400px'
        }} data-api-unique-id='example-rc2997e3beac22558-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
            <Marker position={markerPosition} title="拖动我" draggable onDragEnd={newPos => setMarkerPosition(newPos)} pinBackground="#34A853" data-api-unique-id='example-r364306ef86e1d21e-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example' />
          </Map>
        </GoogleMapProvider>
      </div>

      {/* 示例 4: 卫星地图 */}
      <div className="space-y-2" data-api-unique-id='example-r8c320e06ce6f15e5-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
        <h3 className="text-xl font-semibold" data-api-unique-id='example-r98ea482a5f8ddd19-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>4. 卫星地图</h3>
        <GoogleMapProvider data-api-unique-id='example-rd100d321d6b870f5-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example'>
          <Map center={{
          lat: 39.9042,
          lng: 116.4074
        }} zoom={16} mapTypeId="satellite" className="rounded-lg overflow-hidden border" style={{
          height: '400px'
        }} mapTypeControl data-api-unique-id='example-rf38d86498ee5a548-s3654579915' data-api-unique-page-name='src/components/GoogleMap/Example' />
        </GoogleMapProvider>
      </div>
    </div>;
}