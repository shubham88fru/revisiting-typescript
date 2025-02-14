//<reference path="@types/google.maps" />

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();

console.log(user, company);

const map = new CustomMap("map");
map.addMarker(user);
map.addMarker(company);
