import { Migration } from '@mikro-orm/migrations';

export class Migration20230226143139 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "address" ("id" serial primary key, "plz" varchar(255) not null, "address" varchar(255) not null);',
    );
    this.addSql(
      'alter table "address" add constraint "address_plz_address_unique" unique ("plz", "address");',
    );

    this.addSql(
      'create table "building" ("id" serial primary key, "address_id" int null, "type" smallint not null);',
    );
    this.addSql(
      'alter table "building" add constraint "building_address_id_unique" unique ("address_id");',
    );

    this.addSql(
      'create table "contact" ("id" serial primary key, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "phone" varchar(255) not null, "comment" varchar(255) not null);',
    );

    this.addSql(
      'create table "renovation_request" ("id" serial primary key, "housing_units_count" int not null, "building_id" int null, "contact_id" int null, "metadata" jsonb null);',
    );
    this.addSql(
      'alter table "renovation_request" add constraint "renovation_request_building_id_unique" unique ("building_id");',
    );
    this.addSql(
      'alter table "renovation_request" add constraint "renovation_request_contact_id_unique" unique ("contact_id");',
    );

    this.addSql(
      'alter table "building" add constraint "building_address_id_foreign" foreign key ("address_id") references "address" ("id") on update cascade on delete cascade;',
    );

    this.addSql(
      'alter table "renovation_request" add constraint "renovation_request_building_id_foreign" foreign key ("building_id") references "building" ("id") on update cascade on delete cascade;',
    );
    this.addSql(
      'alter table "renovation_request" add constraint "renovation_request_contact_id_foreign" foreign key ("contact_id") references "contact" ("id") on update cascade on delete cascade;',
    );
  }
}
