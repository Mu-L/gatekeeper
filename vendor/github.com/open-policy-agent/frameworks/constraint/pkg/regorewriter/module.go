package regorewriter

import (
	"os"
	"strings"

	"github.com/open-policy-agent/opa/v1/ast"
	"github.com/open-policy-agent/opa/v1/format"
)

// Module represents a rego module.
type Module struct {
	FilePath

	// Module is the rego module produced from the ast parser.
	Module *ast.Module
}

// Write writes the module to the path specified in FilePath.
func (m *Module) Write() error {
	b, err := format.Ast(m.Module)
	if err != nil {
		return err
	}
	return os.WriteFile(m.Path(), b, 0o600)
}

// Content returns the module as a byte slice of rego source code.
func (m *Module) Content() ([]byte, error) {
	return format.AstWithOpts(m.Module, format.Opts{
		RegoVersion: m.Module.RegoVersion(),
	})
}

// IsTestFile returns true if the module corresponds to a unit test.
func (m *Module) IsTestFile() bool {
	return strings.HasSuffix(m.Path(), "_test.rego")
}
