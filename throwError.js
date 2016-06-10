try {
  var error = {name: "fucked", message: "something fucked up"}
  if (true) {throw error}
} catch(e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e)
} finally {
  console.log("Whatever...")
}