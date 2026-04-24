

async function test() {
  try {
    const response = await fetch('http://localhost:5000/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: 'Check out this awesome new ai tool!',
        platform: 'Twitter'
      })
    });
    const result = await response.json();
    console.log("STATUS:", response.status);
    console.log("RESPONSE:", JSON.stringify(result, null, 2));
  } catch(e) {
    console.error("ERROR:", e);
  }
}
test();
