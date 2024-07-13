"use client"

import { Typography } from '@material-ui/core';
import Canvas from './(lowcode)/_components/Canvas';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ margin: "0 auto",  maxWidth: "1200px" }}>
      <Typography variant="h5" align="center">低代码编辑器</Typography>
      <Canvas />
      <Link href="/render">用户界面</Link>
    </div>
  );
}
