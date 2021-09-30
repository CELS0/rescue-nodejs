import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('logins')
class Login {
    @PrimaryGeneratedColumn('increment')
    readonly id: number;
    
    @Column()
    login: string;

    @Column()
    password: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
export { Login }