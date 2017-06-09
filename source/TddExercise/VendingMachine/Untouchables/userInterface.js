UserInterface = function(commandName, commandParameter) {
    this.commandName = commandName;
    this.commandParameter = commandParameter;
};

UserInterface.prototype = {
    writeLine: function(message) {
        var paragraph = $("<p></p>");
        paragraph.text(message);
        $("#dialogue").append(paragraph);
    },
    parameter: function (parameterName) {
        if(parameterName === "command") {
            return this.commandName;
        }
        return this.commandParameter;
    },
    variable: function(variableName) {
        if(variableName === "value") {
            return this.value;
        }
        throw "Unknown variable " + variableName;
    }
};
