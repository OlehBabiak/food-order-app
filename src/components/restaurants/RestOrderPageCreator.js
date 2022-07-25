import Meals from "../Meals/Meals";
import { Fragment, useContext, useEffect, useState } from "react";
import FoodAppService from "../services/FoodAppService";
import ErrorMessage from "../errorMessage/errorMessage";
import Spinner from "../spinner/Spinner";
import Context from "../../store/cart-context";
import { PageMessages } from "../../common/enums/page/page-message.enum";

const RestOrderPageCreator = ( {path} ) => {
	const [menu, setMenu] = useState([]);
	const [summary, setSummary] = useState("");
	
	const foodAppService = new FoodAppService();
	const {cartContext} = useContext(Context);
	
	const errorMessage = cartContext.loadState.error ? (
		<ErrorMessage content={ PageMessages.ERROR_PAGE_MESSAGE }/>
	) : null;
	const spinner = cartContext.loadState.loading ? <Spinner/> : null;
	const content = !(
		cartContext.loadState.loading ||
		cartContext.loadState.error ||
		!menu.length
	) ? (
		<Meals menu={ menu } summary={ summary }/>
	) : null;
	
	const onMenuLoaded = ( menu ) => {
		setMenu(menu);
		cartContext.changeLoad(false);
	};
	
	const onSummaryLoaded = ( sum ) => {
		setSummary(sum);
		cartContext.changeLoad(false);
	};
	
	const onMenuLoading = () => {
		cartContext.changeLoad(true);
	};
	
	const onError = () => {
		cartContext.changeLoad(true);
		cartContext.changeErrState(true);
	};
	
	const getMenu = () => {
		onMenuLoading();
		foodAppService.getRestMenu(path).then(onMenuLoaded).catch(onError);
	};
	
	const getMealsSummary = () => {
		onMenuLoading();
		foodAppService.getSummary(path).then(onSummaryLoaded).catch(onError);
	};
	
	useEffect(() => {
		getMenu();
		getMealsSummary();
	}, []);
	
	return (
		<Fragment>
			{ errorMessage }
			{ spinner }
			{ content }
		</Fragment>
	);
};

export default RestOrderPageCreator;
