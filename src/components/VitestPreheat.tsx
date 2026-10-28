"use client";

import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Layers3, Rocket, Sparkles, Zap } from "lucide-react";
import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const activityData = [{
  key: "Mon",
  value: 21
}, {
  key: "Tue",
  value: 42
}, {
  key: "Wed",
  value: 58
}, {
  key: "Thu",
  value: 63
}, {
  key: "Fri",
  value: 70
}, {
  key: "Sat",
  value: 75
}, {
  key: "Sun",
  value: 78
}];
const featureBadges = ["shadcn/ui primitives", "Framer Motion", "Lucide icons", "Recharts"];
export default function VitestPreheat() {
  const timestamp = dayjs().format("YYYY-MM-DD HH:mm");
  return <div className="grid gap-6 p-6 lg:grid-cols-2" data-api-unique-id='vitestpreheat-r6bf013ddf0b98e8a-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
      <Card className="border-dashed" data-api-unique-id='vitestpreheat-ra36c62f3118d58e1-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
        <CardHeader className="gap-4" data-api-unique-id='vitestpreheat-rc6b044c73dbd2112-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
          <div className="flex items-center gap-3" data-api-unique-id='vitestpreheat-r8aa2707894f0af9d-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            <Sparkles className="text-primary" size={20} data-api-unique-id='vitestpreheat-r3188433309df5b4e-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
            <div data-api-unique-id='vitestpreheat-rf3f70b6d5d1d5971-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <CardTitle data-api-unique-id='vitestpreheat-r597ff363c14498e4-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>Vitest 预热面板</CardTitle>
              <CardDescription data-api-unique-id='vitestpreheat-ra1ba077fd9449bd1-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>最后预编译：{timestamp}</CardDescription>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed" data-api-unique-id='vitestpreheat-r758d70f0b7a8df2a-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            该组件引入常用 shadcn 组件、Recharts、Lucide、Framer Motion，
            通过渲染行为让 Vitest 在预热阶段就编译绝大部分依赖，从而缩短后续冒烟耗时。
          </p>
        </CardHeader>
        <CardContent className="space-y-6" data-api-unique-id='vitestpreheat-rf6eb376fdfecff7f-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
          <div className="h-48 w-full" data-api-unique-id='vitestpreheat-r2ceaa974974be6be-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            <ResponsiveContainer width="100%" height="100%" data-api-unique-id='vitestpreheat-rc1ab4e9b6c7a0ddd-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <LineChart data={activityData} data-api-unique-id='vitestpreheat-re87cd0010ffe742e-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
                <XAxis dataKey="key" stroke="#94a3b8" data-api-unique-id='vitestpreheat-r8d6adcd3742505c3-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
                <YAxis stroke="#94a3b8" data-api-unique-id='vitestpreheat-rf1971b736387af93-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
                <Tooltip contentStyle={{
                borderRadius: 12,
                borderColor: "hsl(var(--border))",
                background: "hsl(var(--card))"
              }} data-api-unique-id='vitestpreheat-rfa9b9f6bee466134-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
                <Line type="natural" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} data-api-unique-id='vitestpreheat-rc1ca8cd214d4d389-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2" data-api-unique-id='vitestpreheat-rf07a6480ee5f0163-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            {featureBadges.map((item, index) => <Badge key={item} variant="secondary" data-api-unique-id='vitestpreheat-re7578a28ddbd99c2-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' data-api-in-loop='1' data-api-bind-info={`featureBadges-${index}-$item`} data-api-map-var-name='item'>
                {item}
              </Badge>)}
          </div>
        </CardContent>
        <CardFooter className="justify-between" data-api-unique-id='vitestpreheat-r9d4b0bd6266d0359-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-api-unique-id='vitestpreheat-r3e76578422a9c9b5-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            <Layers3 size={16} data-api-unique-id='vitestpreheat-r839ef8db668c7d7c-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
            <span data-api-unique-id='vitestpreheat-r001c765117cb8cae-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>依赖缓存已启用</span>
          </div>
          <Button size="sm" className="gap-1" data-api-unique-id='vitestpreheat-r7a00ff6d9c24dbf4-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            <Rocket size={16} data-api-unique-id='vitestpreheat-r90b7dc19a9a4e51f-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
            重新预热
          </Button>
        </CardFooter>
      </Card>

      <Card data-api-unique-id='vitestpreheat-rfa4ad0dcde22db50-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
        <CardHeader data-api-unique-id='vitestpreheat-r41d6d77916155331-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
          <CardTitle data-api-unique-id='vitestpreheat-re7103d648aa1250a-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>依赖健康度</CardTitle>
          <CardDescription data-api-unique-id='vitestpreheat-r9c8e631a25b2b0f5-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>实时跟踪 Vitest 预热状态</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6" data-api-unique-id='vitestpreheat-ref9bdf03c5392ab8-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
          <motion.div initial={{
          opacity: 0,
          y: 12
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.35
        }} className="space-y-3 rounded-lg border p-4" data-api-unique-id='vitestpreheat-rcb25665a35d55ce1-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            <div className="flex items-center gap-2 text-sm" data-api-unique-id='vitestpreheat-re05a848925ffd191-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <Zap size={16} className="text-yellow-500" data-api-unique-id='vitestpreheat-rd170284b3279d5ff-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
              <span data-api-unique-id='vitestpreheat-r77ad50d53e3fb8d1-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>当前命中率</span>
              <Badge variant="outline" data-api-unique-id='vitestpreheat-r1adaa081a730609b-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>92%</Badge>
            </div>
            <Progress value={92} data-api-unique-id='vitestpreheat-rf43f1dda13d4752a-s2292147086' data-api-unique-page-name='src/components/VitestPreheat' />
            <p className="text-muted-foreground text-xs" data-api-unique-id='vitestpreheat-rcddca7cc79658199-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              命中率越高，后续 Vitest 请求耗时越短。
            </p>
          </motion.div>

          <Tabs defaultValue="recharts" className="w-full" data-api-unique-id='vitestpreheat-r254e36f7967303d6-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
            <TabsList className="grid grid-cols-3" data-api-unique-id='vitestpreheat-r0c57a6b597e3919f-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <TabsTrigger value="recharts" data-api-unique-id='vitestpreheat-r1acd2f0884dde2a7-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>Recharts</TabsTrigger>
              <TabsTrigger value="motion" data-api-unique-id='vitestpreheat-r694abd896c29ce91-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>Motion</TabsTrigger>
              <TabsTrigger value="icons" data-api-unique-id='vitestpreheat-rfa81093c4617560b-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>Lucide</TabsTrigger>
            </TabsList>
            <TabsContent value="recharts" className="space-y-2 text-sm" data-api-unique-id='vitestpreheat-r9a8535aa45ec5254-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <p className="text-muted-foreground" data-api-unique-id='vitestpreheat-rc8dcfaa1b5aa5481-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
                预热过程中将 Recharts 的动画计算提前执行，确保图表组件在冒烟时不会触发二次编译。
              </p>
            </TabsContent>
            <TabsContent value="motion" className="space-y-2 text-sm" data-api-unique-id='vitestpreheat-re54aef78b440cd84-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <p className="text-muted-foreground" data-api-unique-id='vitestpreheat-r9786f10a0d37bec5-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
                Framer Motion 的关键帧在此组件中被执行，可复用缓存避免热身阶段的 GC 抖动。
              </p>
            </TabsContent>
            <TabsContent value="icons" className="space-y-2 text-sm" data-api-unique-id='vitestpreheat-r35e97145ed4e7527-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
              <p className="text-muted-foreground" data-api-unique-id='vitestpreheat-rb6361ba942da77fd-s2292147086' data-api-unique-page-name='src/components/VitestPreheat'>
                Lucide 图标包体积不小，预热时加载一次可让后续页面切换更顺畅。
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>;
}