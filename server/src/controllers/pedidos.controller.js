import pedidos from '../models/pedidos';

export const createPedidos = async (req, res) => {
    try{
        const {
                codigo, 
                cantidad, 
                nombre, 
                pago_inicial, 
                pago_final, 
                fecha_pago, 
                fecha_salida, 
                fecha_llegada_real, 
                fecha_llegada_estimada, 
                fecha_aduana,
                fecha_inicial,
                estado,
                tipo_de_envio,
                flete,
                valor_cif,
                honorarios,
                arancel,
                gastos_agencia,
                numero_din,
                cuentas_bancos_id,
                agentes_aduana_id,
                proveedores_id,
                dolar_mensual_id,
                fecha_vencimiento,
                tipo_pago
            } = req.body;
        const newPedido = await pedidos.create({
                codigo, 
                cantidad, 
                nombre, 
                pago_inicial, 
                pago_final,
                fecha_pago, 
                fecha_salida, 
                fecha_llegada_real, 
                fecha_llegada_estimada, 
                fecha_aduana,
                estado,
                tipo_de_envio,
                flete,
                valor_cif,
                honorarios,
                arancel,
                gastos_agencia,
                numero_din,
                cuentas_bancos_id,
                agentes_aduana_id,
                proveedores_id,
                dolar_mensual_id,
                fecha_vencimiento,
                tipo_pago,
                fecha_inicial
        },{
            fields: [
                'codigo', 
                'cantidad', 
                'nombre', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial'
            ]
        });
        res.json({
            resultado: true,
            message: "Pedido creado correctamente",
            pedido: newPedido 
        });
    } catch (e) {
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false, 
            pedido: null
        });
    };
};


export const updatePedidos = async (req, res) => {
    try{
        const {id} = req.params;
        const body =  req.body;
        const pedidoUpdate = await pedidos.update({
            body
        },
        {
            where: {id}
        });
        res.json({
            message: 'Pedido actualizado',
            resultado: true,
            pedidos: pedidoUpdate
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador",
            pedidos: null
        });
    }
};

export const deletePedidos = async (req, res) => {
    try{
        const {id} = req.params;
        await pedidos.destroy({
            where: {
                id
            }
        });
        res.json({
            resultado: true, 
            message: 'Pedido eliminado correctamente'
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador"
        });
    }; 
};

export const getAllPedidos = async (req, res) => {
    try{
        const allPedidos = await pedidos.findAll({
            attributes: [
                'codigo', 
                'cantidad', 
                'nombre', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial'
            ],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true, 
            message: "",
            pedidos: allPedidos
        });
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            pedidos: null
        });
    };
};

export const getPedidosId = async (req, res) => {
    try{
        const {id} = req.params;
        const pedidos = await pedidos.findOne({
            where: {
                id
            },
            attributes: [
                'codigo', 
                'cantidad', 
                'nombre', 
                'pago_inicial', 
                'pago_final',
                'fecha_pago', 
                'fecha_salida', 
                'fecha_llegada_real', 
                'fecha_llegada_estimada', 
                'fecha_aduana',
                'estado',
                'tipo_de_envio',
                'flete',
                'valor_cif',
                'honorarios',
                'arancel',
                'gastos_agencia',
                'numero_din',
                'cuentas_bancos_id',
                'agentes_aduana_id',
                'proveedores_id',
                'dolar_mensual_id',
                'fecha_vencimiento',
                'tipo_pago',
                'fecha_inicial'
            ]
        });
        res.json({
            resultado: true, 
            message: "", 
            pedidos: productos
        }); 
    }catch(e){
        console.log(e);
        res.json({
            resultado: false, 
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            pedidos: null
        });
    };
};