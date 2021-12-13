import { DoubleCheck, PeopleMultiple, ReduxFill } from "akar-icons";

export const LandingPage = (props) => {
  return (
    <div className={ "pt-10" }>
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

      <section className={"py-10"}>
        <div className="flex flex-col items-center">
          <div className="heading text-2xl font-semibold">
            Logipsum is the premium insurance provider
          </div>

          <div className="border border-rose-300 my-2 w-20"></div>

          <div className="subhead text-xl text-center">
            We protect your assets by capitalizing on cutting-edge technology, <br/>backed by 24x7 customer services, catering to your needs anytime, anywhere.
          </div>
        </div>
      </section>
    </div>
  )

}