import { Request, Response} from 'express';

import pool from '../database'

class EmpleadosController {

    public async list (req:Request, res:Response) {
        const empleados = await pool.query('SELECT * FROM empleados');
        res.json(empleados);
    } 

    public async getOne (req:Request, res:Response): Promise<any> {
        const {id} = req.params;
        const empleados = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
        if (empleados.length > 0) {
            return res.json(empleados[0]);
        }
        res.status(404).json({text:'El empleado no fue encontrado'});
    }

    public async create (req:Request, res:Response): Promise<void> {
        await pool.query('INSERT INTO empleados set ?', [req.body]);
        res.json({messge: 'Empleado creado con exito'});
    }

    public async delete (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM empleados WHERE id=?',[id]);
        res.json({messge: 'Empleado eliminado'});
    }

    public async update (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE empleados set ? WHERE id=?',[req.body, id]);
        res.json({messge: 'Datos actualizados'});
    }
}

const empleadosController = new EmpleadosController();
export default empleadosController;