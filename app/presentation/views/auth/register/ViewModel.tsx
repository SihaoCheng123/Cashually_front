import {useState} from "react";
import * as Yup from 'yup';
import Toast from "react-native-toast-message";
import {RegisterUseCase} from "../../../../domain/useCases/auth/RegisterUseCase";
import {UserInterface} from "../../../../domain/entities/User";

const RegisterViewModel = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        phone: "",
    })

    const onChangeRegister = (property:string, value:any) => {
        setValues({...values, [property]: value});
    }

    const registerSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Invalid email address"),
        password: Yup.string().required("Password is required").min(8, "Minimum 8 characters")
            .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
            .matches(/\d/, 'Password must contain at least 1 digit'),
        confirmPassword: Yup.string().required("Confirm password is required").
        oneOf([Yup.ref("password")], "Passwords must match"),
        age: Yup.number().required("Age is required"),
        phone: Yup.string().matches(/^\d*$/, 'Phone number must contain only digits'),
    })

    const register = async () =>{
        try{
            await registerSchema.validate(values, { abortEarly: false });
            const dataSend: UserInterface = {
                name: values.name,
                email: values.email,
                password: values.password,
                age: Number(values.age),
                phone: values.phone,
            }
            const response = await RegisterUseCase(dataSend)
            console.log("RESULT: " + JSON.stringify(response));
            return response

        }catch (error){
            if (error instanceof Yup.ValidationError) {
                Toast.show({
                    type: "error",
                    text1: error ? error.message : "",
                    position: "bottom"
                })
            }
        }
    }

    return{
        ...values,
        onChangeRegister,
        register,
    }
}

export default RegisterViewModel