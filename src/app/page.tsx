"use client"

import { Button as MaterialButton, Typography } from '@material-ui/core';

import { useRouter } from 'next/navigation';
import Canvas from './(lowcode)/_components/Canvas';

export default function Home() {

  const router = useRouter();

  const handleLoadClick = () => {
    router.push('/render');
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <Typography variant="h5" align="center">低代码编辑器</Typography>
      <Canvas />
      <MaterialButton
        className="load-state-btn"
        size="small"
        variant="outlined"
        color="secondary"
        onClick={handleLoadClick}
      >
        用户界面
      </MaterialButton>
    </div>
  );
}
