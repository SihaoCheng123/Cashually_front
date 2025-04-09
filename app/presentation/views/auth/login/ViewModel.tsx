import {useState} from "react";
import * as Yup from "yup";
import {UserLoginRequest, UserLoginResponse} from "../../../../domain/entities/User";
import Toast from "react-native-toast-message";
import {LoginUseCase} from "../../../../domain/useCases/auth/LoginUseCase";
import {saveUserUseCase} from "../../../../domain/useCases/userLocal/SaveUser";


const LoginViewModel = () =>{
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const onChangeLogin = (property:string, value:any) => {
        setValues({...values, [property]: value});
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Invalid email address"),
        password: Yup.string().required("Password is required"),
    })

    const login = async () =>{
        try{
            await loginSchema.validate(values, {abortEarly: false})
            const dataSend : UserLoginRequest = {
                email: values.email,
                password: values.password,
            }
            const response = await LoginUseCase(dataSend)
            console.log("RESULT: " + JSON.stringify(response));
            if (response.data){
                await saveUserUseCase(response.data as UserLoginResponse)
            }
            return response
        }catch (error){
            if (error instanceof Yup.ValidationError) {
                Toast.show({
                    type: "error",
                    text1: error ? error.message : "",
                    position: "bottom"
                })
            }
            return null
        }
    }

    return{
        ...values,
        onChangeLogin,
        login,
    }
}

export default LoginViewModel;