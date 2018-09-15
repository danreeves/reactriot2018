import format from "date-fns/format";
import get from "lodash-es/get";

export async function fetchDate(date) {
  const dstr = format(date, "YYYY/M/D");
  const response = await fetch(
    `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${dstr}`
  );
  const json = await response.json();
  return get(json, "celebrations.0", { title: "Error: seek redemption" });
}
