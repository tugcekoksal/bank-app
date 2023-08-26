import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import { logo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter}  ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} sm:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map((link) => {
          return (
            <div
              key={link.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h2 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h2>
              <ul className="list-none mt-4">
                {link.links.map((l) => (
                  <li
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4
                    }`}
                  >
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#999]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.name}
            className="w-[21px] h-[21px] object-contain curosr-pointer mr-6"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
