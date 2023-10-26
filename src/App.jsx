import Nav  from "./component/Nav";


import{ Hero ,
CustomerReviews,
PopularProducts, Services , SpecialOffer ,Subsribe ,SuperQuality  , Footer} from './sections'

const App = () => {
  return (
    <div className = 'relative'>
      <Nav/>
      <section className='x1:padding-1
       wide: padding-r padding-b'>
        <Hero />
       </section>
       <section className="padding">
       < PopularProducts />
       </section>
       <section className="padding">
      < SuperQuality />
       </section>
       <section className="padding-x py-10">
      < Services />
       </section>
       <section className="padding">
       < SpecialOffer />
       </section>

       <section className="bg-pale-blue padding">
       <CustomerReviews />
       </section>
       <section className="padding-x sm:py-32 py-16 w-full">
        <Subsribe />
       </section>
       <section className="bg-black padding-x padding-t pb-8">
       < Footer />
       </section>

    </div>
  )

}

export default App
