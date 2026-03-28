import { HOME_SCHEMA } from "./schema/home.schema";
import { ABOUT_SCHEMA } from "./schema/about.schema";
import { CONTACT_SCHEMA } from "./schema/contact.schema";
import { GALLERY_SCHEMA } from "./schema/gallery.schema";

import { SANDAL_VALLEY_SCHEMA } from "./schema/sandal-valley.schema";
import { HILL_VIEW_SCHEMA } from "./schema/hill-view.schema";
import { WEEKEND_VILLAGE_SCHEMA } from "./schema/weekend-village.schema";

export const SCHEMA_MAP: any = {

  '/': HOME_SCHEMA,
  '/about': ABOUT_SCHEMA,
  '/contact': CONTACT_SCHEMA,
  '/gallery': GALLERY_SCHEMA,

  '/sandal-valley-farms': SANDAL_VALLEY_SCHEMA,
  '/hill-view-farms': HILL_VIEW_SCHEMA,
  '/weekend-village-farms': WEEKEND_VILLAGE_SCHEMA,

};