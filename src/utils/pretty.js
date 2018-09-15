export default function prettify(input) {
  var output = Math.round(input * 100000000) / 100000000;
  return output;
}
