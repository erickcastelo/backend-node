import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Device } from '../device/device.model';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;

  @OneToMany(() => Device, (device) => device.category)
  devices: Device[];
}
