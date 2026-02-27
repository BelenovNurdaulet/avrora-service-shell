import React, { Suspense } from "react";

const ComponentPage = React.lazy(() => import("catalog/ComponentPage"));

function App() {
    return (
        <div>
            <div style={{ padding: 20 }}>
                <h1>Shell App</h1>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentPage />
            </Suspense>
        </div>
    );
}

export default App;