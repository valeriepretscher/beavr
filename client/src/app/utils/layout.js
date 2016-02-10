let layout = {};

layout.setDirection = function (direction) {
    layout.rtl = (direction === 'rtl');
    document.getElementsByTagName("html")[0].style.direction = direction;
    var styleSheets = document.styleSheets;
    var modifyRule = function (rule) {
        if (rule.style.getPropertyValue(layout.rtl ? 'left' : 'right') && rule.selectorText.match(/\.col-(xs|sm|md|lg)-push-\d\d*/)) {
            rule.style.setProperty((layout.rtl ? 'right' : 'left'), rule.style.getPropertyValue((layout.rtl ? 'left' : 'right')));
            rule.style.removeProperty((layout.rtl ? 'left' : 'right'));
        }
        if (rule.style.getPropertyValue(layout.rtl ? 'right' : 'left') && rule.selectorText.match(/\.col-(xs|sm|md|lg)-pull-\d\d*/)) {
            rule.style.setProperty((layout.rtl ? 'left' : 'right'), rule.style.getPropertyValue((layout.rtl ? 'right' : 'left')));
            rule.style.removeProperty((layout.rtl ? 'right' : 'left'));
        }
        if (rule.style.getPropertyValue(layout.rtl ? 'margin-left' : 'margin-right') && rule.selectorText.match(/\.col-(xs|sm|md|lg)-offset-\d\d*/)) {
            rule.style.setProperty((layout.rtl ? 'margin-right' : 'margin-left'), rule.style.getPropertyValue((layout.rtl ? 'margin-left' : 'margin-right')));
            rule.style.removeProperty((layout.rtl ? 'margin-left' : 'margin-right'));
        }
        if (rule.style.getPropertyValue('float') && rule.selectorText.match(/\.col-(xs|sm|md|lg)-\d\d*/)) {
            rule.style.setProperty('float', (layout.rtl ? 'right' : 'left'));
        }
        if (rule.style.getPropertyValue('text-align') && rule.selectorText.match(/\.text-(xs|sm|md|lg)-(left|right)/)) {
            rule.style.setProperty('text-align', (layout.rtl ? 'right' : 'left'));
        }
        if (rule.style.getPropertyValue('text-align') && rule.selectorText.match(/\.text-(left|right)/)) {
            rule.style.setProperty('text-align', (layout.rtl ? 'right' : 'left'));
        }
    };
    try {
        for (var i = 0; i < styleSheets.length; i++) {
            var rules = styleSheets[i].cssRules || styleSheets[i].rules;
            if (rules) {
                for (var j = 0; j < rules.length; j++) {
                    if (rules[j].type === 4) {
                        var mediaRules = rules[j].cssRules || rules[j].rules
                        for (var y = 0; y < mediaRules.length; y++) {
                            modifyRule(mediaRules[y]);
                        }
                    }
                    if (rules[j].type === 1) {
                        modifyRule(rules[j]);
                    }

                }
            }
        }
    } catch (e) {
        // Firefox might throw a SecurityError exception but it will work
        if (e.name !== 'SecurityError') {
            throw e;
        }
    }
}

export default layout;
