const CuntactPage = () => {
  return (
    <div className="justify-center lg:px-1/3 px-10 py-20 text-black">
        <h1 className="text-center text-5xl font-semibold">Contact us!</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.550065239339!2d-98.27479988862223!3d30.573422071848196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b1cf041f234c7%3A0xec712c6f2c8cfe6a!2s511%20US-281%2C%20Marble%20Falls%2C%20TX%2078654!5e0!3m2!1sen!2sus!4v1663798565964!5m2!1sen!2sus" className="lg:w-1/3 h-96 rounded-3xl mx-auto my-10"></iframe>
        <div className="flex flex-row lg:w-1/3 mx-auto">
            <h2 className="text-2xl font-semibold text-center">Address: </h2>
            <h2 className="text-2xl text-center">511 US-281 Marble Falls, TX 787654</h2>
        </div>
        <div className="flex flex-row lg:w-1/3 mx-auto my-4">
            <h2 className="text-2xl font-semibold mr-2 text-center">Phone: </h2>
            <h2 className="text-2xl text-center">512-569-8065</h2>
        </div>
        <div className="flex flex-row lg:w-1/3 mx-auto">
            <h2 className="text-2xl font-semibold mr-2 text-center">Hours: </h2>
            <h2 className="text-2xl text-center">By appointment only</h2>
        </div>
    </div>
  )
}

export default CuntactPage