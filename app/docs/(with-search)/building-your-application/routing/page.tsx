'use client';


export default  function Page() {

  return <div>My doc</div>;
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
