import { Suspense } from "react";
import Home from "./Home";

export default function TestApp({ testapp }) {
  return (
    <div>
      <h1>Test App</h1>
      <Suspense fallback={<Loading />}></Suspense>
    </div>
  );

  function Loading() {
    return <h2>🌀 Loading.. </h2>;
  }
}
