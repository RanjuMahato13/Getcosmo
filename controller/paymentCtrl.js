const esewapay = require("esewapay")
const instance = new esewapay({
    key_id:"",key_secret:""
})

const checkout = async(req, res) => {
    const option = {
        amount: 50000,
        Rupees:"Rs"
    }
    const order = await instance.orders.create(option)
    res.json({
        success: true,
        order
    })
}
const paymentVerification = async (req, res) => {
   const { esewapayOrderId, esewapayPaymentId} = req.body
   res.json({
    esewapayOrderId,esewapayPaymentId
   })
}

module.exports ={
    checkout, paymentVerification
}