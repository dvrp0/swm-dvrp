import { getLogoCount } from "$lib/server/logo";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    return { count: getLogoCount() };
}