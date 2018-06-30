function actions() {
    let input1, input2, result;
    return {
        init: (selector1, selector2, resultSelector) => [input1, input2, result] = [$(selector1), $(selector2), $(resultSelector)],
        add: () => result.val(+input1.val() + +input2.val()),
        subtract: () => result.val(+input1.val() - +input2.val())
    };
}

