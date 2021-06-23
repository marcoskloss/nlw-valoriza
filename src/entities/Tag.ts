import { 
  Entity, 
  PrimaryColumn, 
  Column, 
  UpdateDateColumn, 
  CreateDateColumn 
} from 'typeorm'
import { v4 } from 'uuid'

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = v4()
    }
  }
}

export { Tag }