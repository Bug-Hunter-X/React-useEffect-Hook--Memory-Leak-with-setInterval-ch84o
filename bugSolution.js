```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```