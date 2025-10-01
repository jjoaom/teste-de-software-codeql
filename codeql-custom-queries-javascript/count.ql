import javascript

from BinaryExpr b
where b.getOperator() in ["+", "-", "*", "/", "%"]
select b, "Operação encontrada: " + b.getOperator()
