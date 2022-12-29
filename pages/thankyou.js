import Image from "next/image";
const Thankyou = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-40">
        <Image
          src="/thank_you_page.gif"
          width="145"
          height="145"
          alt="thank you"
        />
        <p className="mt-2 text-xl font-medium">Your order is successful</p>
      </div>
    </div>
  );
};

export default Thankyou;
