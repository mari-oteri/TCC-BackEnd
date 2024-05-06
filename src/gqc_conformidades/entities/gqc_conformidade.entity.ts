import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GqcConformidades {
  @PrimaryColumn()
  id_CF: number;

  @Column()
  assignee_eng: string;
  // Assigne

  @Column()
  time_progress: number;

  @Column()
  issuetype: string;

  @Column()
  task_status: string;

  @Column()
  tag: string;

  @Column()
  key_id: string;
  //

  @Column()
  id_Jira: number;

  @Column()
  hangar_project: string;
  //Hangar

  @Column()
  time_hrs: string;
  // time;

  @Column()
  updated_date:  string;
  // date;

  @Column()
  summary: string;

}
