import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || "", {
  apiVersion: "2020-08-27",
});

interface Item {
  name: string;
  price: number;
  quantity: number;
  image: {
    asset: {
      _ref: string;
    };
  }[];
}

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NJkZiDRubp9Ec6zfDkeM3o2" },
          { shipping_rate: "shr_1NJkaDDRubp9Ec6zfYtek40e" },
        ],
        line_items: req.body.map((item: Item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/zowvnqwm/production/"
            )
            .replace("-webp", ".webp");

          return {
            price_data: {
              currency: "BRL",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: Math.round(item.price * 100),
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      console.log(session); // Verifique a sessão criada

      res.status(200).json(session);
    } catch (err: any) {
      console.error(err);
      res
        .status(err.statusCode || 500)
        .json({ error: "Erro ao criar a sessão de checkout." });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
