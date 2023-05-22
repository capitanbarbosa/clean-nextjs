export default function Client() {
  const handleClick = async () => {
    fetch("https://186.155.197.158/notify", {
      // mode: "no-cors",
      headers: {
        origin: "https://clean-nextjs-sage.vercel.app/client",
      },
    })
      .then((response) => {
        // Handle response from server
        console.log(response);
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Send request to sserver</button>
    </div>
  );
}
