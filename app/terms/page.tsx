"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "legal", "scope", "sectionA", "sectionB", "sectionC", "sectionD"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-60 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
          <div className="p-6">
            <h3 className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">Sections</h3>
            <ul className="space-y-1 mb-8">
              {[
                { id: "intro", label: "Introduction" },
                { id: "legal", label: "Legal Basis" },
                { id: "scope", label: "Scope of Application" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-purple-50 text-purple-600 font-medium"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">Detailed Terms</h3>
            <ul className="space-y-1">
              {[
                { id: "sectionA", label: "Section A – Vendor" },
                { id: "sectionB", label: "Section B – Customer" },
                { id: "sectionC", label: "Section C – Send Parcel" },
                { id: "sectionD", label: "Section D – Traveler" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-purple-50 text-purple-600 font-medium"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1 max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
          {/* Mobile section tabs */}
          <div className="md:hidden sticky top-16 z-40 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/75 border-b border-gray-200">
            <div className="flex gap-2 overflow-x-auto no-scrollbar px-2 py-3">
              {[
                { id: "intro", label: "Intro" },
                { id: "legal", label: "Legal" },
                { id: "scope", label: "Scope" },
                { id: "sectionA", label: "Vendor" },
                { id: "sectionB", label: "Customer" },
                { id: "sectionC", label: "Send Parcel" },
                { id: "sectionD", label: "Traveler" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs ${
                    activeSection === item.id
                      ? "border-purple-600 text-purple-700 bg-purple-50"
                      : "border-gray-200 text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-10 leading-relaxed">
            <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">Terms & Conditions</h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-10">Last updated: 15 August 2025</p>

            <section id="intro" className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-6">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Agreement") govern the relationship between Routo and its users. By
                accessing or using our platform, you agree to be bound by these terms and all applicable laws and
                regulations.
              </p>
            </section>

            <section id="legal" className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-6">
                Legal Basis
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Indian Contract Act, 1872 – Governing contractual obligations.</li>
                <li>Information Technology Act, 2000 – Governing electronic records and online transactions.</li>
                <li>Consumer Protection Act, 2019 – Protecting consumer rights and interests.</li>
                <li>Motor Vehicles Act, 1988 – Governing transport and delivery operations.</li>
                <li>Narcotic Drugs and Psychotropic Substances Act, 1985</li>
                <li>Arms Act, 1959</li>
                <li>Postal Act, 1898 (where applicable)</li>
              </ul>
            </section>

            <section id="scope" className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-6">
                Scope of Application
              </h2>
              <p className="text-gray-700 mb-4">These Terms and Conditions are divided into the following sections:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Section A – Vendor Terms & Conditions</li>
                <li>Section B – Customer Terms & Conditions</li>
                <li>Section C – Send Parcel Service – Customer Terms & Conditions</li>
                <li>Section D – Traveler Terms & Conditions</li>
              </ul>
            </section>

            <section id="sectionA" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-8">
                SECTION A – Vendor Terms & Conditions
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">1. Product Returns & Delivery Charges</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>1.1</strong> If a customer returns a product due to damage, defect, incorrect item,
                      expired goods, or other valid causes, you, the Vendor, shall bear:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>The return shipping/delivery charges</li>
                      <li>Any replacement shipping charges (if applicable)</li>
                      <li>Any applicable compensation mandated under Consumer Protection Act, 2019 – Section 17</li>
                    </ul>
                    <p>
                      <strong>1.2</strong> Return charges shall not be deducted from the customer's refund.
                    </p>
                    <p>
                      <strong>1.3 Example:</strong> If a customer orders a fresh cake and receives a stale or damaged
                      cake, you will pay for the reverse pickup cost and resend a fresh cake at your expense.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">2. Payment Settlement Process</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>2.1</strong> After an order is successfully delivered and accepted by the customer, Routo
                      will release payment to you after deducting:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Platform commission (18%–20%)</li>
                      <li>Applicable Goods and Services Tax (GST)</li>
                      <li>Any penalties or adjustments (if applicable)</li>
                    </ul>
                    <p>
                      <strong>2.2</strong> Settlement timelines will be 3-5 working days, subject to banking delays.
                    </p>
                    <p>
                      <strong>2.3 Example:</strong> If you sell a product for ₹1000 and the commission is 18%, you will
                      receive ₹820 minus applicable GST and adjustments.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    3. Vendor Registration & Document Verification
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>3.1</strong> All documents submitted during registration (e.g., GST Certificate, FSSAI
                      License, Aadhaar, PAN) must be genuine, valid, and up to date.
                    </p>
                    <p>
                      <strong>3.2</strong> Submitting false, forged, or expired documents will result in{" "}
                      <strong className="text-red-600">IMMEDIATE TERMINATION</strong> without prior notice under IPC
                      Section 420 (Cheating) and possible legal prosecution.
                    </p>
                    <p>
                      <strong>3.3</strong> Routo reserves the right to conduct random audits.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">4. Stock Management & Order Availability</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>4.1</strong> Vendors must update product availability in real time.
                    </p>
                    <p>
                      <strong>4.2</strong> If an item is out of stock, you must:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Immediately mark it as "Out of Stock" on the platform, or</li>
                      <li>Restock and update inventory status within 2 hours</li>
                    </ul>
                    <p>
                      <strong>4.3</strong> Repeated acceptance of orders for unavailable products will lead to:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Reduction of shop rating</li>
                      <li>Temporary suspension</li>
                      <li>Public flagging of your shop profile</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-blue-800">
                        <strong>Example:</strong> If you keep accepting orders for a pizza that is not available and
                        cancel later, your rating will drop, affecting customer trust.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">5. Product Quality & Accuracy</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>5.1</strong> You must deliver exactly what is described in the listing — correct brand,
                      size, weight, type, and quality.
                    </p>
                    <p>
                      <strong>5.2</strong> If delivering food items, ensure compliance with Food Safety and Standards
                      Act, 2006.
                    </p>
                    <p>
                      <strong>5.3</strong> Any misrepresentation or substitution (e.g., giving mutton biryani instead of
                      vegetable biryani) will make you fully liable for:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Refunds</li>
                      <li>Compensation</li>
                      <li>Legal penalties under Section 272 IPC (Adulteration of Food)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="sectionB" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-8">SECTION B – Customer Terms & Conditions</h2>
              <p className="text-gray-700 mb-8">These terms apply to all individuals or entities who purchase products, place orders, or use any delivery-related services via Routo. By placing an order, you agree to comply with these conditions along with applicable laws, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-8">
                <li>Consumer Protection Act, 2019</li>
                <li>Indian Contract Act, 1872</li>
                <li>Information Technology Act, 2000</li>
                <li>Indian Penal Code, 1860</li>
              </ul>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">1. Order Acceptance, Cancellation & Refund Eligibility</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">1.1 Placing an Order</h4>
                      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                        <li>When you place an order on Routo, it constitutes a binding contract under Section 10 of the Indian Contract Act, 1872.</li>
                        <li>Orders are subject to vendor confirmation and availability.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">1.2 Order Cancellation Before Acceptance</h4>
                      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                        <li>If the assigned traveler (delivery agent) has not yet accepted the order, you may cancel and receive a 100% refund without any charges.</li>
                        <li>Refunds will be processed within 7 working days to your original payment method.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">1.3 Cancellation After Traveler Acceptance but Before Pickup</h4>
                      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                        <li>If the traveler has accepted the order but has not yet picked it up, cancellation will incur a cancellation fee of ₹[X] or a percentage of the order value, whichever is higher.</li>
                        <li>This deduction covers administrative and time-based costs.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">1.4 Cancellation After Pickup or at Time of Delivery</h4>
                      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                        <li>If you cancel after the traveler has picked up your order or when the traveler arrives for delivery, you shall pay:</li>
                        <ul className="list-disc list-inside ml-8 space-y-1">
                          <li>Double the delivery charge</li>
                          <li>The standard cancellation fee</li>
                        </ul>
                        <li>These charges will either be collected immediately or added to your next order bill.</li>
                        <li>This policy is supported by Section 74 of the Indian Contract Act, 1872 (Penalty for breach of contract).</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-800"><strong>Example:</strong> You order groceries worth ₹500 with ₹50 delivery fee. If you cancel after pickup, you will pay ₹100 (double delivery fee) + ₹20 cancellation fee = ₹120 penalty.</p></div>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">2. Incorrect, Damaged, or Mismatched Items</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">2.1 Vendor Responsibility</h4>
                      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                        <li>If you receive the wrong product, the vendor is liable under Section 17 of the Consumer Protection Act, 2019 (Deficiency in goods/services).</li>
                        <li>The platform (Routo) will facilitate communication but is not responsible for product mismatches.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">2.2 Mismatched Food Orders</h4>
                      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                        <li>If you receive a product of a different category than ordered — such as non-vegetarian food instead of vegetarian — and consume it, you waive the right to claim damages from Routo.</li>
                        <li>Any claims for health impact, religious concerns, or dietary restrictions will be directed solely to the vendor.</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg"><p className="text-sm text-yellow-800"><strong>Example:</strong> If you order vegetarian pulao and receive chicken pulao, Routo will not be responsible for the mismatch once consumed.</p></div>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">3. Returns Policy</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">3.1 Return Window</h4>
                      <p className="text-gray-700">Returns must be initiated within 1 hour of receiving the delivery, failing which the item is deemed accepted.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">3.2 Return Process for Prepaid Orders</h4>
                      <p className="text-gray-700">Refunds will be issued within 7 working days after deduction of applicable return handling charges.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">3.3 Return Process for COD Orders</h4>
                      <p className="text-gray-700">If payment was made via Cash on Delivery and the return is approved, refunds will be processed to your bank account within 7 working days.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-3">3.4 Non-Returnable Items</h4>
                      <p className="text-gray-700">Certain items (e.g., perishable goods, customized orders) cannot be returned unless defective or damaged.</p>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">4. Cash-on-Delivery (COD) Non-Payment</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>4.1 Obligation to Pay:</strong> By placing a COD order, you agree to pay the full order value upon delivery.</p>
                    <p><strong>4.2 Refusal to Pay:</strong> If you refuse payment without valid reason:</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Your account will be permanently banned</li>
                      <li>Legal action will be taken under IPC Section 415 & 420 (Cheating and dishonest misrepresentation).</li>
                    </ul>
                    <div className="bg-red-50 p-4 rounded-lg"><p className="text-sm text-red-800"><strong>Example:</strong> Ordering electronics worth ₹5,000 COD and refusing payment without valid reason will lead to a legal recovery notice.</p></div>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">5. Refund Processing Timeline</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>5.1 Standard Refund Time:</strong> Refunds for cancelled or returned orders will be processed within 7 working days from approval.</p>
                    <p><strong>5.2 Bank Delays:</strong> Routo will not be responsible for delays caused by your bank, payment gateway, or financial institution.</p>
                    <p><strong>5.3 Refund Method:</strong> Refunds will be made to the original payment method unless otherwise agreed in writing.</p>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">6. Customer Responsibilities</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                    <li>Provide accurate delivery address and contact details.</li>
                    <li>Be available to receive the order within the estimated delivery time.</li>
                    <li>Treat travelers, vendors, and Routo staff with respect and courtesy.</li>
                    <li>Misuse of platform features (e.g., repeated false complaints) will result in account suspension.</li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg mt-4"><p className="text-sm text-red-800">⚠ NOTE: Any fraudulent activity, false claims, or intentional misuse of services will result in immediate account suspension, forfeiture of any refunds, and reporting to law enforcement agencies.</p></div>
                </div>
              </div>
            </section>

            <section id="sectionC" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-8">SECTION C – Send Parcel Service – Customer Terms & Conditions</h2>
              <p className="text-gray-700 mb-4">These terms govern the use of Routo’s Send Parcel service by customers sending packages via travelers registered on the Routo platform.</p>
              <p className="text-gray-700 mb-6">By booking a parcel delivery, you agree to comply with these terms along with applicable Indian laws, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-8">
                <li>Indian Contract Act, 1872</li>
                <li>Indian Penal Code, 1860</li>
                <li>Information Technology Act, 2000</li>
                <li>Narcotic Drugs and Psychotropic Substances Act, 1985</li>
                <li>Arms Act, 1959</li>
                <li>Postal Act, 1898 (where applicable)</li>
              </ul>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">1. Responsibility for Parcel Contents</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>1.1 Sole Responsibility of Sender</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>You, the sender, are fully responsible for the legality, safety, and accuracy of the contents of the parcel.</li>
                      <li>Routo acts solely as a facilitator and will not be held responsible for the condition or legality of the parcel contents.</li>
                    </ul>
                    <p><strong>1.2 No Guarantee for High-Value Items</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Routo strongly advises against sending high-value, irreplaceable, or fragile items unless covered under Routo’s Parcel Insurance Policy (refer to Clause 3.3).</li>
                      <li>High-value items include jewellery, cash, electronics, luxury goods, and collectibles.</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-800"><strong>Example:</strong> If you send ₹50,000 worth of gold jewellery without insurance and it gets lost, Routo will not be liable for the loss.</p></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">2. Prohibited & Illegal Items</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>2.1 Strict Prohibition</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Narcotics, drugs, or psychotropic substances (NDPS Act, 1985)</li>
                      <li>Firearms, ammunition, explosives (Arms Act, 1959)</li>
                      <li>Counterfeit currency or goods (IPC Sections 489A–489E)</li>
                      <li>Perishable items without proper packaging</li>
                      <li>Hazardous chemicals or toxic materials</li>
                      <li>Live animals or prohibited wildlife products (Wildlife Protection Act, 1972)</li>
                    </ul>
                    <p><strong>2.2 Consequences of Violation</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>If prohibited/illegal items are found, your account will be permanently banned.</li>
                      <li>Legal action will be initiated under relevant Acts, including police reporting.</li>
                      <li>The traveler delivering such parcels may also be investigated, and your details will be handed over to authorities.</li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg"><p className="text-sm text-yellow-800"><strong>Example:</strong> If you send illegal drugs via Routo and it is intercepted by police, you will face criminal prosecution under the NDPS Act with possible imprisonment.</p></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">3. Loss of Parcel</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>3.1 No Full Liability Without Insurance</strong></p>
                    <p>Routo is not fully liable for lost parcels unless covered by Parcel Insurance.</p>
                    <p><strong>3.2 Proof of Value</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>In case of loss, you must provide valid purchase invoices, receipts, or proof of value.</li>
                      <li>Without valid proof, no compensation will be considered.</li>
                    </ul>
                    <p><strong>3.3 Insurance Coverage</strong></p>
                    <p>If insured, Routo will compensate up to 50% of the parcel’s declared value, subject to claim verification.</p>
                    <div className="bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-800"><strong>Example:</strong> If your insured parcel worth ₹10,000 is lost, you will be eligible for ₹5,000 compensation upon submission of valid proof.</p></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">4. Damage to Parcel</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>4.1 Traveler Responsibility</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Once picked up, the traveler is responsible for the parcel’s safe handling.</li>
                      <li>In case of damage caused by the traveler’s negligence, compensation will follow Traveler Terms & Conditions – Section 4.</li>
                    </ul>
                    <p><strong>4.2 Partial Compensation from Routo</strong></p>
                    <p>If the traveler refuses or fails to compensate, Routo may pay up to 20% of the product’s value, based on valid proof and investigation results.</p>
                    <p><strong>4.3 Packaging Requirement</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>It is your responsibility to ensure proper packaging to prevent transit damage.</li>
                      <li>Poor packaging that directly results in damage will void any compensation claims.</li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg"><p className="text-sm text-yellow-800"><strong>Example:</strong> If you send a laptop in only a thin plastic bag and it arrives broken, compensation will not be provided.</p></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">5. Delivery Timelines & Delays</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>5.1 Estimated Delivery Times</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Timelines provided are estimates and may vary due to traffic, weather, or unforeseen events.</li>
                      <li>Routo will not be liable for delays caused by factors outside reasonable control.</li>
                    </ul>
                    <p><strong>5.2 Critical Deliveries</strong></p>
                    <p>For urgent or time-bound deliveries, it is your responsibility to notify the traveler and confirm feasibility before booking.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">6. Customer Conduct & Cooperation</h3>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                    <li>Provide accurate pickup and drop-off addresses.</li>
                    <li>Ensure the recipient is available at the delivery location.</li>
                    <li>Treat travelers and Routo staff with respect.</li>
                    <li>Any abusive or threatening behavior may result in account suspension.</li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg mt-4"><p className="text-sm text-red-800">⚠ NOTE: Sending prohibited or illegal items via Routo may result in criminal prosecution, permanent account termination, and forfeiture of any refund or compensation.</p></div>
                </div>
              </div>
            </section>

            <section id="sectionD" className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 border-b-2 border-purple-100 pb-3 mb-8">
                SECTION D – Traveler Terms & Conditions
              </h2>

              <p className="text-gray-700 mb-8">
                These Terms & Conditions govern the role and responsibilities of Travelers registered with Routo. By
                accepting any delivery assignment, you (the Traveler) agree to abide by these conditions in full.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">1. Order Acceptance & Commitment</h3>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>1.1 Binding Commitment upon Acceptance:</strong> The moment you accept a delivery request
                      on the Routo platform, you enter into a legally binding service agreement to complete the pickup
                      and delivery within your declared travel route and without unreasonable delay.
                    </p>

                    <p>
                      <strong>1.2 No Unauthorized Cancellations:</strong> Once accepted, cancellation is strictly
                      prohibited unless:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>There is an exceptional, unforeseen emergency, and</li>
                      <li>Routo Support Team provides explicit written or recorded approval.</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Example:</strong> If you accept a food parcel delivery from Vendor A to Customer B, you
                        must complete both pickup and drop-off before your journey ends, even if it requires a minor
                        detour from your planned route.
                      </p>
                    </div>

                    <p>
                      <strong>1.4 Legal Reference:</strong> Failure to complete delivery without a valid reason may be
                      treated as "Breach of Contract" under the Indian Contract Act, 1872.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">2. Compliance with Traffic & Transport Laws</h3>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>2.1 Mandatory Legal Compliance:</strong> Travelers must strictly adhere to:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Motor Vehicles Act, 1988 (Sections on licensing, vehicle fitness, and safe driving)</li>
                      <li>State-specific traffic regulations</li>
                      <li>Helmet (Section 129) and seatbelt (Rule 125) requirements</li>
                      <li>Speed limits and no-parking zones</li>
                    </ul>

                    <p>
                      <strong>2.2</strong> Any fines, challans, or penalties imposed by traffic authorities will be
                      entirely your personal responsibility.
                    </p>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Example:</strong> If you are caught over-speeding at 70 km/h in a 50 km/h zone during a
                        delivery, Routo reserves the right to deduct part or all of your delivery payment and impose
                        internal penalties.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">3. Handling Emergencies & Delivery Issues</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>3.1 Situations Requiring Immediate Reporting:</strong> If you encounter any of the following during a delivery, you must contact Routo Support immediately before taking any action:</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Vehicle breakdown</li>
                      <li>Accident or injury</li>
                      <li>Customer unavailable for delivery</li>
                      <li>Unsafe delivery environment (e.g., aggressive customer, unsafe neighborhood)</li>
                    </ul>
                    <p><strong>3.2 Prohibited Actions:</strong> Unauthorized return, destruction, or disposal of a parcel is a serious violation and may result in:</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Permanent account ban</li>
                      <li>Legal action under IPC Section 403 (Dishonest Misappropriation of Property)</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-800"><strong>3.3 Example:</strong> If a customer refuses to accept an item, you cannot leave it at their doorstep or discard it without Routo’s written approval.</p></div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">4. Liability for Parcel Safety</h3>

                  <div className="space-y-4 text-gray-700">
                    <p><strong>4.1 Full Custody Responsibility:</strong> From the moment you pick up a parcel until the moment the customer confirms receipt, you are fully responsible for its safety and condition.</p>
                    <p><strong>4.2 Loss, Theft, or Damage:</strong> Any loss, theft, or damage during your possession requires you to compensate the customer in full for the product's verified value.</p>
                    <p><strong>4.3 Partial Coverage by Routo:</strong> In rare cases, and only after thorough investigation with valid proof (e.g., invoice, photographs), Routo may cover up to 20% of the product's value, deducted from your earnings if applicable.</p>
                    <p><strong>4.4 Legal Reference:</strong> Theft is punishable under IPC Section 378, and criminal breach of trust under IPC Section 405.</p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">5. Accident & Insurance</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>5.1 No Automatic Liability Coverage:</strong> Routo is not responsible for personal injuries, third-party injuries, or vehicle damage sustained during deliveries.</p>
                    <p><strong>5.2 Optional Insurance:</strong> Limited accident insurance may be available for verified Travelers who meet eligibility criteria and comply with safety guidelines.</p>
                    <div className="bg-yellow-50 p-4 rounded-lg"><p className="text-sm text-yellow-800"><strong>Example:</strong> If you meet with an accident due to your own negligence (e.g., mobile phone use while riding), insurance may be void.</p></div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">6. Professional Conduct</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>6.1 Expected Behavior:</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>No use of abusive, threatening, or discriminatory language</li>
                      <li>No harassment or intimidation of customers or vendors</li>
                      <li>Clear, polite, and respectful communication</li>
                    </ul>
                    <p><strong>6.2 Penalties for Misconduct:</strong></p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Payment deductions</li>
                      <li>Negative rating impact</li>
                      <li>Temporary suspension or permanent account ban</li>
                    </ul>
                    <p><strong>6.3 Legal Reference:</strong> Harassment or verbal abuse may lead to action under IPC Section 504 (Intentional insult with intent to provoke breach of peace).</p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">7. Theft & Fraud</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <p className="text-red-700 mb-3"><strong>7.1 Definition & Consequences:</strong> Picking up a parcel and failing to deliver it to the intended recipient constitutes theft under IPC Section 378.</p>
                      <p className="text-red-700 mb-2"><strong>7.2 Penalties Include:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-red-700">
                        <li>Filing of a police complaint</li>
                        <li>Permanent ban from the platform</li>
                        <li>Recovery of product value and damages</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg"><p className="text-sm text-yellow-800"><strong>7.3 Example:</strong> Accepting delivery of an expensive mobile phone and falsely claiming it was lost may result in criminal charges and imprisonment.</p></div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">8. Commission & Payment Settlement</h3>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>8.1 Commission Deduction:</strong> Routo will deduct 12%–15% commission from the agreed
                      delivery fee before transferring payment to the Traveler.
                    </p>

                    <p>
                      <strong>8.2 Payment Timelines:</strong> Payments will be processed according to banking schedules.
                      Public holidays and non-banking days may delay settlement.
                    </p>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>8.3 Example:</strong> If your delivery fee is ₹500 and the commission is 15%, your payable
                        amount will be ₹425, subject to any deductions for penalties or damages.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">5. Theft & Fraud</h3>

                  <div className="space-y-4">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <p className="text-red-700 mb-3">
                        <strong>5.1 Definition & Consequences:</strong> Picking up a parcel and failing to deliver it to
                        the intended recipient constitutes theft under IPC Section 378.
                      </p>

                      <p className="text-red-700 mb-2">
                        <strong>5.2 Penalties Include:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-red-700">
                        <li>Filing of a police complaint</li>
                        <li>Permanent ban from the platform</li>
                        <li>Recovery of product value and damages</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Example:</strong> Accepting delivery of an expensive mobile phone and falsely claiming
                        it was lost may result in criminal charges and imprisonment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-center text-gray-600 leading-relaxed">
                By continuing to use Routo, you acknowledge that you have read, understood, and agreed to these Terms &
                Conditions.
              </p>
            </div>
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500 pb-8">
            © 2025 Routo Technologies Pvt. Ltd. |{" "}
            <Link href="/privacy" className="text-purple-600 hover:underline">
              Privacy Policy
            </Link>
          </footer>
        </main>
      </div>
    </div>
  )
}
