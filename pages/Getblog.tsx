import pexel from "../public/pexel.jpg";
import Image from "next/image";
import mask from "../public/Mask.jpg";
import man from "../public/Man.jpg";
import glaciers from "../public/glaciers.jpg";
import scientist from "../public/scientist.jpg";
import posts from "../public/posts.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Getblog = (props:any) => {

   

  return (
    <>

      <div className="p-16 lg:ml-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="lg:w-78 l">
          {/* <img src={data.pageData.photo.cover} alt="" /> */}
          {/* <Image
            src={data.}
            alt="pexel"
            className="lg:w-100 lg:h-56 mt-4"
          ></Image> */}
          <h5 className="bg-red-500  w-16 text-center mt-4 text-white">
            Fashion
          </h5>
          <h1 className="italic text-3xl">
            The Hidden Mystery Behind <br />
            Fashion
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ad
            temporibus voluptate, soluta cum quibusdam ipsam quae! Error cumque
            nulla enim itaque commodi hic a architecto eaque alias repudiandae
            harum temporibus quia autem dolore assumenda quos, corrupti saepe.
            Omnis, quia voluptatibus! Harum consequatur cumque iste quod
            quisquam sapiente. Quas harum quisquam mollitia amet laboriosam
            voluptates aut quae porro cupiditate voluptate et debitis dolorem
            autem blanditiis nisi, ea facilis consequatur obcaecati ex veniam
            consectetur accusamus ullam. Necessitatibus a nostrum praesentium
            doloremque placeat sed dolorum optio, quia aperiam, at dolorem
            pariatur repudiandae. Reprehenderit, eligendi error qui sapiente ut
            porro consectetur. Accusantium, eligendi laborum blanditiis possimus
            voluptates non labore aperiam, itaque dolore, explicabo impedit
            temporibus enim nam quaerat eveniet quas. Magnam, qui recusandae?
            Mollitia modi doloribus eos consequatur eligendi ut quos sequi
            veritatis in? Voluptatem adipisci neque reprehenderit vitae iure,
            quaerat deserunt error tempore nemo, sint nobis hic! Laborum alias
            adipisci accusamus molestiae! Architecto voluptatum officia
            dignissimos dolorem rerum rem animi, eos eum odit maiores sapiente
            iste, necessitatibus hic. Nam soluta omnis, iusto recusandae harum
            distinctio placeat libero sapiente, eos at corporis laboriosam!
            Facere doloremque aut impedit? Rem tempora dicta veniam voluptatem
          </p>
          <h2 className="text-2xl mt-4">
            Travelling is not the same as vacation
          </h2>
          <p className="mt-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            inventore quo vitae obcaecati voluptatum fugit pariatur quia quas
            eum impedit id tempora dolor iusto, minima ex necessitatibus placeat
            veritatis aliquid, sed aut voluptatem, corporis assumenda. Omnis
            placeat nostrum consequatur assumenda. Ipsa doloremque illo
            dignissimos alias itaque reprehenderit assumenda minima qui?
          </p>
          <h2 className="text-xl mt-4">I beacame a noramd by accident</h2>
          <p className="mt-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            inventore quo vitae obcaecati voluptatum fugit pariatur quia quas
            eum impedit id tempora dolor iusto, minima ex necessitatibus placeat
            veritatis aliquid, sed aut voluptatem, corporis assumenda. Omnis
            placeat nostrum consequatur assumenda. Ipsa doloremque illo
            dignissimos alias itaque reprehenderit assumenda minima qui?
          </p>
          <Image
            src={scientist}
            alt="girl"
            className="mt-8 w-full h-48"
          ></Image>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            harum obcaecati totam eos modi. Adipisci neque aut minima eveniet,
            repellat voluptates corporis, illo doloribus error amet repellendus
            reiciendis ducimus architecto quos voluptas, necessitatibus fugit
            nisi atque? Nam, iusto totam assumenda repellat sint maxime officiis
            necessitatibus! Libero et neque rerum vel quibusdam, magnam
            provident omnis enim aspernatur autem quasi impedit earum laudantium
            exercitationem maxime consequuntur, voluptatibus ratione. Magnam
            molestiae eum deserunt, quo cumque voluptatum eligendi minus
            accusantium. Ex alias assumenda cumque unde in odio accusamus
            placeat molestias quaerat! Cum perspiciatis velit dicta voluptates,
            libero ut suscipit quae repudiandae officia, quisquam debitis!
          </p>

        
        </div>
        <div className="w-60 ml-8 ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <h3 className="text-bold mt-4"> Recent Posts</h3>
          <div className="relative">
            <Image src={mask} alt="mask" className="mt-4 "></Image>
            <p className="absolute bg-white-200 absolute bottom-0 left-4 bg-white h-8 ">
              {" "}
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="relative">
            <Image src={man} alt="mask" className="mt-4 "></Image>
            <p className="absolute bg-white-200 absolute bottom-0 left-4 bg-white h-8 ">
              {" "}
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="relative">
            <Image src={glaciers} alt="mask" className="mt-4 "></Image>
            <p className="absolute bg-white-200 absolute bottom-0 left-4 bg-white h-8 ">
              {" "}
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="relative">
            <Image src={scientist} alt="mask" className="mt-4 "></Image>
            <p className="absolute bg-white-200 absolute bottom-0 left-4 bg-white h-8 ">
              {" "}
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <h2 className="text-xl mt-4 ">Categories</h2>
            <div className="mt-4 flex">
              <div>Enviornment </div>
              <div>
                <Image
                  src={posts}
                  alt="posts"
                  className="ml-16 w-16 h-6"
                ></Image>
              </div>
            </div>
            <div className="mt-4 flex">
              <div>Fashion</div>
              <div>
                <Image
                  src={posts}
                  alt="posts"
                  className="ml-24 w-16 h-6"
                ></Image>
              </div>
            </div>
            <div className="mt-4 flex">
              <div>Fashion</div>
              <div>
                <Image
                  src={posts}
                  alt="posts"
                  className="ml-24 w-16 h-6"
                ></Image>
              </div>
            </div>
            <div className="mt-4 flex">
              <div>Fashion</div>
              <div>
                <Image
                  src={posts}
                  alt="posts"
                  className="ml-24 w-16 h-6"
                ></Image>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl mt-4 ">Popular Posts</h2>
            <div className="mt-4"> </div>
            <div className="flex w-100"><Image src={pexel} alt="pexel" className="w-"></Image>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
            <div>Life style</div>
            <div>Travelling</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getblog;
