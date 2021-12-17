import { DoubleCheck, PeopleMultiple, ReduxFill, CodepenFill } from "akar-icons";
import './landingPage.css';

export const LandingPage = (props) => {
  return (
    <div className={ "landing pt-10" }>
      <section className={ "tag-line flex flex-row justify-between items-center" }>
        <div className="tagline flex flex-col">
          <div className="tag font-semibold text-5xl">
            Everything comes with a risk, <br/> that’s why we are here for you.
          </div>

          <div className="border border-rose-300 my-2 w-20"></div>
          <div className="sub text-xl">
            We take the hassle out of insurance and enable you <br/> to live life with complete peace of mind.
          </div>

          <button className={ "place-self-start my-4 py-3 px-5 rounded-xl text-white bg-rose-600 font-semibold" }>Get
            Insured
          </button>
        </div>

        <div className="image">
          <img src="http://placeimg.com/500/700/people" alt="arch" className={ "rounded-3xl" }/>
        </div>
      </section>

      <section className={ "flex flex-row py-10 px-5 justify-between" }>
        <div
          className="transition duration-200 card py-5 px-4 cursor-default shadow-lg hover:shadow-2xl w-1/4 h-1/4 rounded-2xl flex flex-col items-center">
          <DoubleCheck size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
          <div className="font-semibold p-3 text-2xl">Instant Claim Settlement</div>
          <div className="random p-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
            eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
          </div>
        </div>

        <div
          className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-default w-1/4 h-1/4 rounded-2xl flex flex-col items-center">
          <PeopleMultiple size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
          <div className="font-semibold p-3 text-2xl">24/7 Customer Service</div>
          <div className="random p-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
            eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
          </div>
        </div>

        <div
          className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-default w-1/4 h-1/4 rounded-2xl flex flex-col items-center">
          <ReduxFill size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
          <div className="font-semibold p-3 text-2xl">Widest Range of Products</div>
          <div className="random p-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
            eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
          </div>
        </div>
      </section>

      <section className={ "py-10" }>
        <div className="flex flex-col items-center pb-10">
          <div className="heading text-2xl font-semibold">
            Copper Guild is the premium insurance provider
          </div>

          <div className="border border-rose-300 my-2 w-20"></div>

          <div className="subhead text-xl text-center">
            We protect your assets by capitalizing on cutting-edge technology, <br/>backed by 24x7 customer services,
            catering to your needs anytime, anywhere.
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-10">
          <div
            className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl flex flex-col items-center">
            <CodepenFill size={ 56 } strokeWidth={ 1 } color={ "#e11d48" }/>
            <div className="font-semibold p-3 text-2xl">Auto Direct Insurance</div>
            <div className="random p-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
              eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
            </div>
          </div>

          <div
            className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl flex flex-col items-center">
            <PeopleMultiple size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
            <div className="font-semibold p-3 text-2xl">Home Direct Insurance</div>
            <div className="random p-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
              eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
            </div>
          </div>

          <div
            className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl flex flex-col items-center">
            <ReduxFill size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
            <div className="font-semibold p-3 text-2xl">Travel Direct Insurance</div>
            <div className="random p-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
              eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
            </div>
          </div>

          <div
            className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl flex flex-col items-center">
            <CodepenFill size={ 56 } strokeWidth={ 1 } color={ "#e11d48" }/>
            <div className="font-semibold p-3 text-2xl">Auto Direct Insurance</div>
            <div className="random p-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
              eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
            </div>
          </div>

          <div
            className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl flex flex-col items-center">
            <PeopleMultiple size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
            <div className="font-semibold p-3 text-2xl">Home Direct Insurance</div>
            <div className="random p-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
              eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
            </div>
          </div>

          <div
            className="transition duration-200 card py-5 px-4 shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl flex flex-col items-center">
            <ReduxFill size={ 56 } strokeWidth={ 1.5 } color={ "#e11d48" }/>
            <div className="font-semibold p-3 text-2xl">Travel Direct Insurance</div>
            <div className="random p-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque cupiditate dolor dolore ea
              eligendi eum ex facilis hic minima nemo nostrum quas quasi, repellendus sequi. A nobis optio pariatur!
            </div>
          </div>
        </div>
      </section>

      <section className={ "p-10" }>
        <div className="head text-6xl pb-3 font-bold">
          Need Assistance! 😄
        </div>

        <div className="head text-2xl font-semibold">
          We’re here, all 24 hours of the day
        </div>

        <div className="border border-rose-300 my-2 w-20"/>
        <div className="head text-xl font-semibold">
          Simply call us at 111-000-301 or <br/>download Copper Guild Insurance <br/>iOS or Android App
        </div>
      </section>
    </div>
  )

}