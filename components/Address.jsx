import Image from "next/image";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "${basePath}/img/address/phone.png",
      name: "Phone",
      info: (
        <>
          <li>
            <a href="Tel: +66 88228 3284">+66 88228 3284</a>
          </li>
        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "${basePath}/img/address/email.png",
      name: "Email",
      info: (
        <>
          <li>
            Tanakhom.rattana
            <br />
            @hotmail.com
          </li>
          <li>
            <a href="mailto:tanakhom.rattana@hotmail.com">Click to send email</a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "${basePath}/img/address/location.png",
      name: "Address",
      info: (
        <>
          <li>
            <p>
              Ramintra 5
              <br />
              Bangkhen Bangkok, Thailand
            </p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <ul className="wrapper">
      {addressContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <Image width={25} height={25} src={item.iconImg} alt="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <h3>{item.name}</h3>
              <ul>{item.info}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
