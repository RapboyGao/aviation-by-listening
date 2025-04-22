import _ from "lodash";
import choosingSecrets from "./pepec-choosing-basic";
import choosingBasics from "./pepec-choosing-basic";
import type { PepecChoosing } from "../pepec.types";

export const allChoosing: PepecChoosing[] = choosingBasics.concat(choosingSecrets);
export const allChoosingUnique = _.uniqBy(allChoosing, (choosing) => {
  return choosing.content.reduce((acc, content) => acc + content, "");
});

export default allChoosingUnique;
