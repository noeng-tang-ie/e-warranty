'use client'
import { Form } from "rsuite";
import { CustomInputField } from "../../widgets/CustomInputField";
import { CustomPasswordField } from "@/widgets/CustomPasswordField";
import { CustomTextAreaField } from "@/widgets/CustomTextAreaField";
import { FaUser } from "react-icons/fa";
import CustomInputFileFile from "@/widgets/CustomInputFileFile";
import CustomLookUpField from "@/widgets/CustomLookUpField";



export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
            <p className="text-gray-600 mt-2">
                Welcome to the dashboard. Use the sidebar to navigate.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomInputField
                            name="exampleText"
                            label="Example Text Input"
                            placeholder="Enter some text"
                        />
                    </Form>
                </div>
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomInputField
                            name="exampleNumber"
                            label="Example Number Input"
                            placeholder="Enter a number"
                            type="number"
                            icon={<FaUser />}
                        />
                    </Form>
                </div>
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomPasswordField
                            name="examplePassword"
                            label="Example Password Input"
                            placeholder="Enter a password"
                        />
                    </Form>
                </div>
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomTextAreaField
                            name="exampleTextArea"
                            label="Example Text Area"
                            placeholder="Enter some text"
                            rows={4}
                        />
                    </Form>
                </div>
                <div>
                    <div className="p-4 bg-white border rounded shadow">
                        <Form fluid>
                            <CustomInputField
                                name="exampleWithIcon"
                                label="Input with Icon"
                                placeholder="Enter text with icon"
                                icon={<FaUser />}
                            />
                        </Form>
                    </div>
                </div>
                <div>
                    <div className="p-4 bg-white border rounded shadow">
                        <Form fluid>
                            <CustomInputField
                                name="requiredField"
                                label="Required Field"
                                placeholder="This field is required"
                                text="This field is required text"
                                required
                            />
                        </Form>
                    </div>
                </div>
                
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomInputField
                            name="fieldWithError"
                            label="Field with Error"
                            placeholder="This field has an error"
                            error="This field is required."
                        />
                    </Form>
                </div>
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomInputFileFile
                            name="fieldWithDisabled"
                            label="Field with Disabled"
                            placeholder="This field is disabled"
                            
                        />
                    </Form>
                </div>
                <div className="p-4 bg-white border rounded shadow">
                    <Form fluid>
                        <CustomLookUpField
                            name="lookupField"
                            label="Lookup Field"
                            placeholder="Select an option"
                            
                            data={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                                { label: 'Option 3', value: '3' }
                            ]}
                        />
                    </Form>
                </div>
            </div>
        </div>
    )
}
