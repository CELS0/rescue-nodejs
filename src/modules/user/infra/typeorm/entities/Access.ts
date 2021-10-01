import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('accesses')
class Access {
    @PrimaryGeneratedColumn('increment')
    readonly id: number;
    
    @Column()
    email: string;

    @Column()
    password: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
export { Access }