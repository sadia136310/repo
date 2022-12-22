import React from "react";
import { Country , State } from "country-state-city";
import { useState } from "react";

const Checkout = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <section className="checkout">
      <h1 className="text-4xl text-center font-sans my-5 py-5 font-bold ">Checkout</h1>
        <main className=" p-2 mb-6 lg:p-20 lg:ml-20 lg:w-1/2  ">
          
          <h3 className=" font-semibold text-gray-500">
            Returning customer? <span />
            <button
              type="button"
              className=" inline-block   py-1 w-fit font-sans  text-gray-900 hover:text-gray-400"
            >
              Click here to login
            </button>
          </h3>
          <h1 className=" font-bold w-fit text-2xl py-5">Billing details</h1>
          <form>
            <div class=" grid  grid-cols-2 gap-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name*
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2  text-sm font-medium text-gray-900"
                >
                  Last name*
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div class="py-2">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Company name
              </label>
              <input
                type="text"
                id="company"
                class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                placeholder="Company name"
              />
            </div>
            <div class="py-2">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Country / Region *
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <div class="py-2">
                <label
                  for="street"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Street address*
                </label>
                <div className="">
                  <input
                    type="text"
                    id="streete"
                    class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                    placeholder="House number and street name"
                    required
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    id="street"
                    class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                    placeholder="Apartment, suite,unit,etc.(optional)"
                  />
                </div>
              </div>
            </div>
            <div class="py-2">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Postcode / ZIP*
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                placeholder="Postcode / ZIP "
                required
              />
            </div>
            <div class="py-2">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Town / City *
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                placeholder="Town / City *"
                required
              />
            </div>
            <div class="py-2">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Country / Region *
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
            <div class="grid  grid-cols-2 gap-2">
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone*
                </label>
                <input
                  type="tel"
                  id="first_name"
                  class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address*
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                  placeholder="Email address"
                  required
                />
              </div>
              
            </div>
            <div class="">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900"
                    for="password"
                  >
                    Create account password 
                  </label>
                  <input
                    class="shadow appearance-none  border-gray-300 rounded-3xl  text-gray-900 text-sm  focus:border-gray-500   block w-full p-2.5"
                    id="password"
                    type="password"
                    required
                  />
                </div>
          </form>
        </main>
      </section>
      <div className=" additional-fields p-2 lg:p-20 lg:ml-20 lg:w-1/2">
        <h3 id="ship-to-different-address">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checked}
            onChange={handleChange}
          />
          <label
            class="form-check-label inline-block font-medium font-sans text-gray-600 py-0" 
            for="flexCheckDefault"
          >
            Ship to a different address?
          </label>
          {/* Inline conditional if checked state is `true` will show the div, otherwise, it won't */}

          {checked && (
            <div>
              <section className="checkout-hidden">
                <main>
                  <form>
                    <div class="grid  grid-cols-2 gap-2">
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          First name*
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                          placeholder="First name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="last_name"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Last name*
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>
                    <div class="py-2">
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        id="company"
                        class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                        placeholder="Company name"
                      />
                    </div>
                    <div class="py-2">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Country / Region *
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">State</option>
                        {Country &&
                          Country.getAllCountries().map((i) => (
                            <option value={i.isoCode} key={i.isoCode}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div>
                      <div class="py-2">
                        <label
                          for="street"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Street address*
                        </label>
                        <div className="py-2 ">
                          <input
                            type="text"
                            id="streete"
                            class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                            placeholder="House number and street name"
                            required
                          />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            id="street"
                            class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                            placeholder="Apartment, suite,unit,etc.(optional)"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="py-2">
                      <label
                        for="town_city"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Town / City *
                      </label>
                      <input
                        type="text"
                        id="company"
                        class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                        placeholder="Town / City "
                      />
                    </div>
                    <div class="py-2">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        State *
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Select State</option>
                        {State  &&
                          State .getStatesOfCountry("IN").map((i) => (
                            <option value={i.isoCode} key={i.isoCode}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div class="py-2">
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        PIN Code*
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        class="bg-white-50 border  border-gray-300  text-gray-900 text-sm rounded-3xl  focus:border-gray-500   block w-full p-2.5"
                        placeholder="PIN Code "
                        required
                      />
                    </div>
                  </form>
                </main>
              </section>
            </div>
          )}
        </h3>
      </div>
      
    </>
  );
};

export default Checkout;
