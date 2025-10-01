import javascript

from BinaryExpr b
where b.getOperator() = "/" and b.getRightOperand().toString() = "0"
select b, "Divisão por zero detectada!"
