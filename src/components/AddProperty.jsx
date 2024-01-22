import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProperty = () => {
	const [formData, setFormData] = useState({
		address: "",
		rent: "",
		name: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: name === "rent" ? (value ? parseInt(value, 10) : "") : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData.name);
		console.log(formData.rent);
		console.log(formData.address);

		// 	try {
		// 		const response = await axios.post("http://localhost:8000/api/adddetail", {
		// 			address: formData.address,
		// 			rent: formData.rent,
		// 			name: formData.name,
		// 		});

		// 		console.log("Loan Request Success", response);
		// 		toast.success("Loan request submitted successfully!");

		// 		// Navigate to a different page upon successful loan request

		// 		// Reset form data
		// 		setFormData({
		// 			address: "",
		// 			rent: "",
		// 			name: "",
		// 		});
		// 	} catch (error) {
		// 		console.error("Loan Request Error", error.response?.data);
		// 		toast.error(error.response?.data?.error || "Loan request failed");
		// 	}
	};

	return (
		<div className="h-screen rounded-lg">
			<form
				onSubmit={handleSubmit}
				className="max-w-[400px] w-full bg-gray-900 p-8 px-8 border 2px white"
			>
				<h2 className="text-4xl dark:text-white font-bold text-center">
					Add Property
				</h2>
				<div className="flex flex-col text-gray-400 py-2">
					<label>Name</label>
					<input
						className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Enter name"
					/>
				</div>
				<div className="flex flex-col text-gray-400 py-2">
					<label>Rent</label>
					<input
						className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
						type="number"
						name="rent"
						value={formData.rent}
						onChange={handleInputChange}
						required
						placeholder="Enter Rent "
					/>
				</div>
				<div className="flex flex-col text-gray-400 py-2">
					<label>Address</label>
					<input
						className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
						type="text"
						name="address"
						value={formData.address}
						onChange={handleInputChange}
						required
						placeholder="Enter the address"
					/>
				</div>

				<button
					type="submit"
					className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
				>
					Add this Property
				</button>
			</form>
		</div>
	);
};

export default AddProperty;
