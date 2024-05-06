const axios = require("axios");
const { Axios, AxiosError } = require("axios");
const { Request, Response, NextFunction } = require("express");
// import User from "../models/users";
// import request from "request";
// const handleKhaltiCallback = async (req, res, next) => {
//   try {
//     const { txnId, pidx, amount, purchase_order_id, transaction_id, status } =
//       req.query;

//     if (status !== "Completed") {
//       return res
//         .status(400)
//         .json({ success: false, error: "Payment not completed" });
//     }

//     const headers = {
//       Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
//       "Content-Type": "application/json",
//     };

//     const response = await axios.post(
//       `${process.env.KHALTI_ENDPOINT_SANDBOX}epayment/lookup/`,
//       { pidx },
//       { headers }
//     );

//     if (response.data.status !== "Completed") {
//       return res
//         .status(400)
//         .json({ success: false, error: "Payment not completed" });
//     }

//     const user = await User.findByIdAndUpdate(
//       { _id: purchase_order_id },
//       {
//         verified: true,
//       }
//     );

//     if (user) {
//       return res
//         .status(200)
//         .json({ success: true, message: "Payment verified success !" });
//     } else {
//       return res
//         .status(400)
//         .json({ success: false, message: "User for paymeny not found !" });
//     }
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log(error?.response?.data);
//     }
//     next(error);
//   }
// };

const khaltiInitiate = async (req, res, next) => {
  const { return_url, website_url } = req.body;
  const paymentAmount = Number(process.env.AMOUNT) || 1000;
  try {
    const response = await axios.post(
      `${process.env.KHALTI_ENDPOINT_SANDBOX}epayment/initiate/`,
      {
        return_url,
        website_url,
        amount: paymentAmount * 100,
        purchase_order_id:
          req?.verifyResult?.id ||
          require("crypto").randomBytes(16).toString("hex"),
        purchase_order_name: "Unlock all yoga courses",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        },
      }
    );

    console.log("response", response);

    console.log(response.data);

    // req.pidx = response.data.pidx;
    // req.purchase_order_id = purchase_order_id
    return res.json(response.data);
  } catch (error) {
    console.error("khaltierr", error);
    if (axios.isAxiosError(error)) {
      console.log(error?.response?.data);
    }
    // console.log(error.response.data);
    next(error);
  }
};

module.exports = {
  khaltiInitiate,
  // handleKhaltiCallback
};
